//************************
//****** Model View ******
//************************
var ViewModel = function() {
    var self = this;
    //******************************
    //**** Location Constructor ****
    //******************************

    var Location = function(data) {
        this.category = data.category;
        this.name = data.title;
        this.address = data.address;
        this.marker = data.marker;
        this.isVisible = ko.observable(true);
    };

    self.locationList = ko.observableArray([]);

    //******************************
    //*** Push Location to array ***
    //******************************

    locations.forEach(function(locationItem) {
        self.locationList.push(new Location(locationItem));
    });

    //******************************
    //**** Dropdown menu otions ****
    //******************************

    self.categoryOptions = ['All', 'Amusement', 'Garden', 'Museum', 'Temple'];

    //********************************
    //* Initialize selected Category *
    //********************************
    // selected category to "all" so that all the location  will be shown on load

    self.selectedCategory = ko.observable(self.categoryOptions[0]);

    //********************************
    //********* Filter items *********
    //********************************

    self.filterLocation = ko.computed(function() {
        var listItem = self.locationList();
        var selectedCategory = self.selectedCategory();
        for (var i = 0; i < listItem.length; i++) {
            if (selectedCategory === self.categoryOptions[0]) {
                listItem[i].isVisible(true);
                if (marker) {
                    listItem[i].marker.setVisible(true);
                }
            } else if (selectedCategory !== listItem[i].category) {
                listItem[i].isVisible(false);
                listItem[i].marker.setVisible(false);
            } else {
                listItem[i].isVisible(true);
                listItem[i].marker.setVisible(true);
            }
        }
    });

    self.openWindow = function(place) {
        google.maps.event.trigger(place.marker, 'click');
    };
};

var vm = new ViewModel();