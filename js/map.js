//****************************
//******* Google map *********
//****************************
// Global variables
var map;
var marker;
var markers = [];

var initMap = function() {

    var styles = [{
        featureType: 'water',
        stylers: [{
            color: '#ff0032'
        }]
    }, {
        featureType: 'administrative',
        elementType: 'labels.text.stroke',
        stylers: [{
                color: '#ffffff'
            },
            {
                weight: 6
            }
        ]
    }, {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#e85113'
        }]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
                color: '#efe9e4'
            },
            {
                lightness: -40
            }
        ]
    }, {
        featureType: 'transit.station',
        stylers: [{
                weight: 9
            },
            {
                hue: '#e85113'
            }
        ]
    }, {
        featureType: 'road.highway',
        elementType: 'labels.icon',
        stylers: [{
            visibility: 'off'
        }]
    }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
            lightness: 100
        }]
    }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
            lightness: -100
        }]
    }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
                visibility: 'on'
            },
            {
                color: '#f0e4d3'
            }
        ]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
                color: '#efe9e4'
            },
            {
                lightness: -25
            }
        ]
    }];

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 21.169763,
            lng: 72.795366
        },
        styles: styles,
        zoom: 13,
        mapTypeControl: false
    });

    var infoWindow = new google.maps.InfoWindow({
        maxWidth: 250
    });
    var bounds = new google.maps.LatLngBounds();

    // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('00c67d');

    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    var highlightedIcon = makeMarkerIcon('ffbf00');

    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].position;
        var name = locations[i].title;
        var category = locations[i].category;
        var address = locations[i].address;

        marker = new google.maps.Marker({
            map: map,
            position: position,
            title: name,
            category: category,
            address: address,
            icon: defaultIcon,
            animation: google.maps.Animation.DROP
        });
        bounds.extend(marker.position);
        vm.locationList()[i].marker = marker;

        marker.addListener('click', function() {
            toggleBounce(this);
            map.panTo(marker.getPosition());
            populateInfoWindow(this, infoWindow);
        });

        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });

        function toggleBounce(marker) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null);
            }, 1500);
        }

        function populateInfoWindow(marker, infowindow) {

            var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&imlimit=5&format=json&callback=wikiCallback';
            // Wikipedia AJAX Request to add Wikipedia entry on selected metro station to infoWindow
            $.ajax({
                url: wikiUrl,
                dataType: 'jsonp'
            }).done(function(data) {
                console.log(data);

                var infoUrl = data[3][0];
                var infoDescription = data[2][0];

                // Error handling for if no articles are returned from Wikipedia API
                if (infoUrl === undefined) {
                    infowindow.setContent('<div>' + '<h4>' + marker.title + '</h4>' + '<h5>' + marker.category + '</h5>' + '<h6>' + '<p>' + 'Address : ' + marker.address + '</p>' + '</h6>' + '<p>' + 'Sorry no wikipedia entries found.' + '</p>' + '</div>');
                    infowindow.open(map, marker);

                } else {

                    infowindow.marker = marker;
                    infowindow.setContent('<div>' + '<h4>' + marker.title + '</h4>' + '<h5>' + marker.category + '</h5>' + '<h6>' + '<p>' + 'Address : ' + marker.address + '</p>' + '</h6>' + '<p>' + infoDescription + '<a href="' + infoUrl + '" target="blank">' + '..' + ' Read More' + '</a>' + '</p>' + '</div>');
                    infowindow.open(map, marker);
                }

                // Error handling for if Wikipedia API call fails

            }).fail(function() {
                infowindow.setContent('<div>' + '<h4>' + marker.title + '</h4>' + '<p>' + 'Sorry no wikipedia entries could found.' + '</p>' + '</div>');
                infowindow.open(map, marker);

            });

            // Google Maps event listeners:
            // Close info window and change marker back to camera when user clicks on the // x in the infoWindow or anywhere on the map, reset map center for window
            // resize
            google.maps.event.addListener(map, 'click', function() {
                infowindow.close();
                infowindow.setMarker = null;
            });
            google.maps.event.addListener(infowindow, 'closeclick', function() {
                infowindow.close();
                infowindow.setMarker = null;
            });
            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter({
                    lat: 45.501356,
                    lng: -73.567421
                });
                map.fitBounds(bounds);
            });
        }

        map.fitBounds(bounds);


    }

    // This function takes in a COLOR, and then creates a new marker
    // icon of that color. The icon will be 21 px wide by 34 high, have an origin
    // of 0, 0 and be anchored at 10, 34).
    function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
            'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
            '|40|_|%E2%80%A2',
            new google.maps.Size(21, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(21, 34));
        return markerImage;
    }

    ko.applyBindings(vm);
};

function mapError() {
    alert("Could not load Google Maps");
}