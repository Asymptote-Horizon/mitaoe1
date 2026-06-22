import videos from '../../data/videos.json'

export default function WatchDemo() {
  return (
    <section className="py-16 bg-white/60 backdrop-blur-sm border-t border-teal-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black-800 mb-3">
            PLATFORM DEMO VIDEOS
          </h2>
          <p className="text-gray-600">
            Learn how to use Moodle and CodeTantra effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-black-700 mb-3 text-center">CodeTantra</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-teal-200 bg-black">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/HFSf0dUT6xc"
                  title="CodeTantra demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black-700 mb-3 text-center">Moodle</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-teal-200 bg-black">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/OHEzpSyiFhw"
                  title="Moodle demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
