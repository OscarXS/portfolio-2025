import { MetadataRoute } from 'next'

export default function manifest() {
    return {
        name: 'Dave Gray Teaches Code',
        short_name: "Dave Gray",
        description: "Dave's Blog powered by Next.js",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ec1552',
        icons: [
            {
                "src": "/images/android-icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/images/android-icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
        ],
    }
}