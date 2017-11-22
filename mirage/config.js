export default function() {
  this.namespace = '/api';

  let rentals = [{
      type: 'rentals',
      id: 'grand-old-mansion',
      attributes: {
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        "property-type": 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
      }
    }, {
      type: 'rentals',
      id: 'urban-living',
      attributes: {
        title: 'Urban Living',
        owner: 'Mike Teavee',
        city: 'Seattle',
        "property-type": 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    }, {
      type: 'rentals',
      id: 'downtown-charm',
      attributes: {
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        "property-type": 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }];

    let reviews = [{
        type: 'reviews',
        id: 'review-1',
        attributes: {
          highlight: 'Great Experience',
          source: 'Google',
          location: 'Downtown Charm',
          firstname: 'Dave',
          lastname: 'Attenborough',
          rating: 5,
          description: "I had a great experience with Super Rentals! They accommodated for a minor booking error and I loved our getaway. I would definitely recommend them to anyone."
        }
      }, {
        type: 'reviews',
        id: 'review-2',
        attributes: {
          highlight: 'It was Splendid',
          source: 'Yelp',
          location: 'Grand Old Mansion',
          firstname: 'Tracy',
          lastname: 'Nelson',
          rating: 5,
          description: "We stayed in the grand old mansion with my family for a week and it was splendid."
        }
      }, {
        type: 'reviews',
        id: 'review-3',
        attributes: {
          highlight: 'The Right Rental',
          source: 'Google',
          location: 'Downtown Charm',
          firstname: 'Jason',
          lastname: 'Molet',
          rating: 4.5,
          description: "I had a great vacation and Super Rentals made it easy to pick the right rental for my wife and I."
        }
      }, {
        type: 'reviews',
        id: 'review-4',
        attributes: {
          highlight: 'Super Easy',
          source: 'Yelp',
          location: 'Urban Living',
          firstname: 'Anna', 
          lastname: 'Williams',
          rating: 4.2,
          description: "Prices were average but the experience of getting a rental was super easy and straight-forward."
        }
      }
    ];

  this.get('/rentals', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

  // Finds and returns the provided rental from the rental list 
  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });

  // Returns reviews
  this.get('/reviews', function () {
    return { data: reviews };
  });
}