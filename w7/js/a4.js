  /**
   * the following countries is a helper object for working with countries data and extracting information.
   * See countries-data.js for format of the countries data set.
   */ 
  
  let countries = {
    /**
     * Store all countries from countries-data.js on `countries.all` for convenience.
     */
    all: window.countriesData,

    /**
     * Return an array of all countries, with the Name Object replaced by the
     * appropriate translation, or English if not specified (or unknown).  For
     * example, when language="English", you would process the record for Canada into:
     *
     * {
     *     code: "CA",
     *     continent: "Americas",
     *     areaInKm2: 9984670,
     *     population: 36624199,
     *     capital: "Ottawa",
     *     name: "Canada"
     * }
     *
     * Supported languages include:
     *
     * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
     *
     * Uses `countries.all` as the underlying array of countries to be processed.
     *
     * HINT: IMPORTANT- make sure you don't overwrite the original name object.
     *  e.g., Using Object.create() to create a copy of the original object.
     * 
     */
 
    getByLanguage: function(language= "English") {
      let supported_language = [ "English", "Arabic", "Chinese", "French", "Hindi", "Korean", "Japanese", "Russian"]
      let all_country = []
      if(supported_language.includes(language)){
      
          for(i=0; i< this.all.length; i++){
           let con = JSON.parse(JSON.stringify(this.all[i]))
          con['language'] = language
          all_country.push(con)
          }
      }
      else{
        for(i=0; i< this.all.length; i++){
          let con = JSON.parse(JSON.stringify(this.all[i]))
         con['language'] = "English"
         all_country.push(con)
         }
      }

      return all_country
    },  

    /**
     * Return an array of countries with a population greater than or equal to
     * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
     * otherwise allow any number greater than `minPopulation`.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {Number} minPopulation - (Required) minimum population value
     * @param {Number} maxPopulation - (Optional) maximum population value
     */
    getByPopulation: function(minPopulation, maxPopulation) {
      let all_country = []
    
      if(maxPopulation == undefined){
        this.getByLanguage('English').forEach(ele =>{
          if(ele.population >= minPopulation ){
            all_country.push(ele)
          }
           
})

      }
      else{
       
      
        this.getByLanguage('English').forEach(ele =>{
                   if(ele.population >= minPopulation && ele.population <= maxPopulation){
                     all_country.push(ele)
                   }
                    
        })
      
      }

      return all_country
    }, 

    /**
     * Return an array of countries for the given `continent` with an area
     * greater than or equal to the given `area` in square KM.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {String} continent - (Required) name of the continent (e.g., Europe)
     * @param {Number} minArea - (Required) minimum number of KM2 area
     */
    getByAreaAndContinent: function(continent, minArea) {
      let all_country = []
      
        this.getByLanguage('English').forEach(ele =>{
            
                   if(ele.continent.localeCompare(continent) == 0 && ele.areaInKm2 >= minArea){
                     all_country.push(ele)               
                   }
                    
        })
     
  
      return all_country
    } 
  };

  /**
   * The following tableHelper is a Helper functions for building table elements.
   */
  let tableHelper = {
    /**
     * Clears (any) existing rows from the #table-rows table body, 
     * e.g., set the object's innerHTML as empty string ("").
     */
    clearTable: function() {
      var tableRows = document.getElementById("table-rows"); 
      //var tableRows = document.querySelector("#table-rows"); 
            tableRows.innerHTML = "";
    },  

    /**
     * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img>
     * element with its `src` property set the appropriate flag image URL
     * for this code, e.g., src="flags/ca.png" for Canada.
     * 
     * The flag image files are in directory ./flags.
     * 
     * e.g., use
     * var imageElement = document.createElement("img");
     * to create the image element (e.g., name it imageElement).
     * 
     * use the imageElement.src = the string for the image file with complete path
     * similarly to set other attribute for image element, e.g., attribute alt 
     *  
     * Note: Some of the images are missing and may result in a 404 error. 
     * Ignore these errors.
     */
    countryCodeToFlagImg: function(countryCode) {
      let country_code2 = countryCode.toLowerCase()
      let imageElement = document.createElement("img");
      let path = "flags/" + country_code2 + ".png"
      imageElement.src = path
      return imageElement
    }, 

    /**
     * Takes a single `country` object and converts it to a <tr> with <td>
     * child elements for every column in the row. 
     * 
     * Note: The row should match the expected format of the table (i.e., flag, code, country, continent, etc).
     *       which is different from the property order of the original object.
     * Return the new <tr>...</tr> row.
     *
     * Use the DOM methods document.createElement(), element.appendChild(), etc
     * to create your <tr> row (element).
     */
    countryToRow: function(country) {
      let tr = document.createElement("tr");

   
          td = document.createElement("td");
          td.appendChild(this.countryCodeToFlagImg(country.code));
          tr.appendChild(td);
          td = document.createElement("td");
          txt = document.createTextNode(country.code);
          td.appendChild(txt);
          tr.appendChild(td);
          td = document.createElement("td");
          txt = document.createTextNode(country.name[country.language]);
          td.appendChild(txt);
          tr.appendChild(td);
          td = document.createElement("td");
          txt = document.createTextNode(country.continent);
          td.appendChild(txt);
          tr.appendChild(td);
          td = document.createElement("td");
          txt = document.createTextNode(country.areaInKm2);
          td.appendChild(txt);
          tr.appendChild(td);
          td = document.createElement("td");
          txt = document.createTextNode(country.population);
          td.appendChild(txt);
          tr.appendChild(td);
          td = document.createElement("td");
          txt = document.createTextNode(country.capital);
          td.appendChild(txt);
          tr.appendChild(td);
       return tr
    },  

    /**
     * Takes an array of `country` Objects named `countries`, and passes each
     * `country` in the array  to `tableHelper.countryToRow()`.  The resulting
     * rows are then appended to the #table-rows table body element.  Make sure
     * you use `tableHelper.clear()` to remove any existing rows before you do this.
     */

   
    countriesToTable: function(countries) {
    
      tableHelper.clearTable()
      countries.forEach(country =>{
        document.getElementById('table-rows').appendChild(tableHelper.countryToRow(country))           
      })
    }  
  }
  /**
   * Register click handlers for every menu item in the page.  Use the `countries`
   * and `tableHelper` Objects, and their associated methods, to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked.
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it. For example: "List of Countries
   * and Dependencies - Population between 1 and 2 million" or "List of Countries
   * and Dependencies - All countries in Asia" etc.
   */
  function setupMenuHandlers() {  
    /* The following two lines are the example for the menu item country List By English 
    */
    var menu_english_elem = document.querySelector("#menu_english");
    
    menu_english_elem.addEventListener("click", function(e){
     let country_arr = countries.getByLanguage("English")
     tableHelper.countriesToTable(country_arr);
     let title = document.querySelector('#subtitle');
   title.innerHTML = "List of Countries and Dep.Name in English";
     

    })
    var menu_arabic_elem = document.querySelector("#menu_arabic");
    menu_arabic_elem.addEventListener("click", function(e){
     let country_arr = countries.getByLanguage("Arabic")
     tableHelper.countriesToTable(country_arr)
     let title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name in Arabic";
    })
    var menu_french_elem = document.querySelector("#menu_french");
    menu_french_elem.addEventListener("click", function(e){
     let country_arr = countries.getByLanguage("French")
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name in French";
    })
    var menu_chinese_elem = document.querySelector("#menu_chinese");
    menu_chinese_elem.addEventListener("click", function(e){
     let country_arr = countries.getByLanguage("Chinese")
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name in Chinese";
    })
    var menu_hindi_elem = document.querySelector("#menu_hindi");
    menu_hindi_elem.addEventListener("click", function(e){
     let country_arr = countries.getByLanguage("Hindi")
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name in Hindi";
    })
    var menu_korean_elem = document.querySelector("#menu_korean");
    menu_korean_elem.addEventListener("click", function(e){
     let country_arr = countries.getByLanguage("Korean")
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name in Korean";
    })
    var menu_japanese_elem = document.querySelector("#menu_japanese");
    menu_japanese_elem.addEventListener("click", function(e){
     let country_arr = countries.getByLanguage("Japanese")
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name in Japanese";
    })
    var menu_russian_elem = document.querySelector("#menu_russian");
    menu_russian_elem.addEventListener("click", function(e){
     let country_arr = countries.getByLanguage("Russian")
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name in Russian";
    })
    var population_1st = document.querySelector("#menu_population_100_000_000m");
    population_1st.addEventListener("click", function(e){
     let country_arr = countries.getByPopulation(100000000)
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name -Population > 100000000";
    })
    var population_2nd = document.querySelector("#menu_population_1m_2m");
    population_2nd.addEventListener("click", function(e){
     let country_arr = countries.getByPopulation(1000000, 2000000)
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name -Population - 1000000 ~ 2000000";
    })
    var menu_americas_1mkm = document.querySelector("#menu_americas_1mkm");
    menu_americas_1mkm.addEventListener("click", function(e){
     let country_arr = countries.getByAreaAndContinent("Americas", 1000000)
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name y Area & Continent -> 1 million Km, Americas";
    })
    var menu_asia_all = document.querySelector("#menu_asia_all");
    menu_asia_all.addEventListener("click", function(e){
     let country_arr = countries.getByAreaAndContinent("Asia", 0)
     tableHelper.countriesToTable(country_arr)
     var title = document.querySelector('#subtitle');
     title.innerHTML = "List of Countries and Dep.Name y Area & Continent -> all size, Asia";
    })
    /*
      TO DO: register click handlers for all menu items.
      You can define some common functions, not the object member functions, for some similar tasks.
    */
  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
