
 const config = {
    apiKey: "AIzaSyDpPTpWytVM4G-SIzhXj9RuoRnW9TKv2vA",
    apiUrl(searchString) { 
        return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${searchString}&type=video&key=${this.apiKey}`
     }
} 
export default config;