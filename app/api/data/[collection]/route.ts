import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ collection: string }> }
) {
  const { collection: collectionName } = await params;

  try {
    if (!process.env.MONGODB_URI) throw new Error("No MONGODB_URI provided");

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'mitaoe');
    
    const data = await db.collection(collectionName).find({}).toArray();

    if (data && data.length > 0) {
      if (collectionName === 'contact') {
        return NextResponse.json({ source: 'mongodb', data: data[0] });
      }
      return NextResponse.json({ source: 'mongodb', data });
    } else {
      throw new Error("Collection is empty");
    }
  } catch (error) {
    console.error(`MongoDB fallback triggered for ${collectionName}:`, error);
    
    try {
      const filePath = path.join(process.cwd(), `data/${collectionName}.json`);
      const fileData = fs.readFileSync(filePath, 'utf8');
      return NextResponse.json({ source: 'json', data: JSON.parse(fileData) });
    } catch (fsError) {
      return NextResponse.json({ error: 'Data not found' }, { status: 404 });
    }
  }
}