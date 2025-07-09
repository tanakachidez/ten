import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gold-500/10 rounded-lg p-8 border border-gold-500/20">
          <h3 className="text-2xl font-bold text-gold-400 mb-6 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-4 bg-gold-500/5 rounded-lg border border-gold-500/20">
              <MapPin className="h-6 w-6 text-gold-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gold-300 mb-2">Address:</p>
                <p className="text-gray-300 leading-relaxed">
                  No. 2, East wing, First Floor of 6491A Clyde Road Eastlea, Harare
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gold-500/5 rounded-lg border border-gold-500/20">
              <Phone className="h-6 w-6 text-gold-400 mt-1" />
              <div>
                <p className="font-semibold text-gold-300 mb-2">Phone:</p>
                <p className="text-gray-300 text-lg">+263713014547</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gold-500/5 rounded-lg border border-gold-500/20">
              <Mail className="h-6 w-6 text-gold-400 mt-1" />
              <div>
                <p className="font-semibold text-gold-300 mb-2">Email:</p>
                <p className="text-gray-300">info@goalgetters.co.zw</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gold-500/30 text-center">
          <p className="text-gray-400 mb-3">© 2024 Goal Getters Financial Services. All rights reserved.</p>
          <p className="text-gold-400 font-bold text-lg">"Empowering dreams through smart financial solutions."</p>
        </div>
      </div>
    </footer>
  )
}
