
export async function fetchCatImage(a) {
    try{
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${a.id}`)
        const data = await res.json();
        const [url] = data; 
        return url;
    }catch(err){
      console.log(err)
   }
  }
  
  export async function fetchCatBreeds() {
    try{
      const res = await fetch(`https://api.thecatapi.com/v1/breeds`);
      const data = await res.json();
      const pArray = data.map(a => fetchCatImage(a)); 
      const urls = await Promise.all(pArray); 
      
      const array = [];

      data.forEach(function(element, index) {
        const item = {'description': element['description'] , 'name': element['name'] , 'url' : urls[index].url};
        array.push(item);
      });      

      return array;
    }catch(err){
      console.log(err)
   }
  }
