var locations = [{
        category: "Amusement",
        title: 'Dumas Beach',
        position: {
            lat: 21.083796,
            lng: 72.709347
        },
        address: '635, 100 Feet Rd, 6th Block, Indiranagar, Bengaluru, Karnataka 560095, India',
        placeId: 'ChIJ7cQhrTJT4DsRQ45WvYDXbf4'
    },
    {
        category: "Museum",
        title: 'Science Centre, Surat',
        position: {
            lat: 21.169763,
            lng: 72.795366
        },
        address: 'City Light Road Beside Shree Maheshwari Bhawan, Athwa, Surat, Gujarat 395007',
        placeId: 'ChIJ7TrFsudN4DsRQ9QEE1etbqc'
    },
    {
        category: "Museum",
        title: "Sardar Patel Museum",
        position: {
            lat: 21.195666,
            lng: 72.820092
        },
        address: 'City Light Road behind science centre, Surat, Gujarat 395007',
        placeId: 'ChIJr4zYrGNO4DsRfEBBLZjP5VA'
    },
    {
        category: "Museum",
        title: 'Surat Municipal Aquarium',
        position: {
            lat: 21.183265,
            lng: 72.791865
        },
        address: 'Adajan Gam, Adajan, Surat, Gujarat 395009',
        placeId: 'ChIJw1pD-c9N4DsRT0-HH2TJEgM'
    },
    {
        category: "Amusement",
        title: 'Old Fort Of Surat',
        position: {
            lat: 21.196087,
            lng: 72.817685
        },
        address: 'Rang Upvan Rd, Chowk Bazar, Varasa, Surat, Gujarat 395003',
        placeId: 'ChIJ46z95mJO4DsRRwSPkQ5FDig'
    },
    {
        category: "Garden",
        title: 'Gopi Talav',
        position: {
            lat: 21.188602,
            lng: 72.829761
        },
        address: 'Whitefield Main Road, Mahadevpura, Bengaluru, Karnataka 560048, India',
        placeId: 'ChIJp0WMz1xO4DsReWJB6wKW5c4'
    },
    {
        category: "Temple",
        title: 'Ambika Niketan Temple',
        position: {
            lat: 21.178261,
            lng: 72.792967
        },
        address: 'Parle Point, Athwalines, Dumas Road, Surat, Gujarat 395007',
        placeId: 'ChIJU6lqwdxN4DsRwr2GMqqK4Z4'
    },
    {
        category: "Amusement",
        title: 'Amaazia Water Park',
        position: {
            lat: 21.194514,
            lng: 72.865036
        },
        address: 'Canal Road, Opposite Dumbal Transport Godown, Magob, Parvat Patiya, Surat, Gujarat 395010',
        placeId: 'ChIJAXFdU6RP4DsRQ4hHKUgid24'
    },
    {
        category: "Garden",
        title: 'Dutch Garden',
        position: {
            lat: 21.191354,
            lng: 72.813374
        },
        address: 'Dutch Garden Rd, Nanpura, Surat, Gujarat 395001',
        placeId: 'ChIJJ-4ydHtO4DsRsQuuFPMYjsI'
    },
    {
        category: "Amusement",
        title: 'Sarthana Nature Park',
        position: {
            lat: 21.230102,
            lng: 72.898890
        },
        address: 'Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
        placeId: 'ChIJ9wQCU_VF4DsRb4wn3LMyVMM'
    },
    {
        category: "Temple",
        title: 'ISKCON Surat',
        position: {
            lat: 21.239848,
            lng: 72.790821
        },
        address: ' ISKCON TEMPLE, Sri Sri Radha Damodar Temple Ashram Road, Jahangirpura Surat, Gujarat 395005',
        placeId: 'ChIJNTC3AAlM4DsR4z8bdOEPX5w'
    }
];

/* HTTP geolocaitn api to find the address of the particular area */
//https://maps.googleapis.com/maps/api/geocode/json?address=ISKCON+Surat&key=AIzaSyA31u0Hxmq37sPOLezIMM8wg0VLJd5E0Sg