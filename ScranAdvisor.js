const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

module.exports = ScranAdvisor;

ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
}


ScranAdvisor.prototype.getAllNames = function() {
    // Use map to extract the 'name' property from each object
    data = this.restaurants
    return data.map(function(restaurants) {
        return restaurants.name;
    });
}

ScranAdvisor.prototype.findRestaurantsByCity = function(city){
    return this.restaurants.filter (restaurants => restaurants.city === city);
}

const returnElement = (arrayElement, name) => {
    if (arrayElement.name == name){
        return arrayElement;
    } else{
        return null;
    }
  };
  

ScranAdvisor.prototype.findRestaurantsByName = function(name){
    return this.restaurants.find (restaurants => restaurants.name === name);
}
