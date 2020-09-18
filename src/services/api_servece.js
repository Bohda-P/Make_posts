class ApiService {
    constructor(baseUrl){
        this.url = baseUrl
    }

  async createPost(post){
      try {
        const request = new Request(this.url + '/posts.json', {
            method: 'POST',
            body: JSON.stringify(post)
        })    
        return useREQUEST(request)
      } catch (e) {
          console.log(e)
      }
    const request = new Request(this.url + '/posts.json', {
        method: 'POST',
        body: JSON.stringify(post)
    })    
       await fetch(request)
    }

    async fetchPosts(){
        try {
            const request = new Request(`${this.url}/posts.json`, {
                method:'GET'
            })

            return useREQUEST(request)
        } catch (e) {
            console.log(e)
        }
    }
    async fetchPostById(id){
        try {
            const request = new Request(`${this.url}/posts/${id}.json`, {
                method:'GET'
            })
            
            return useREQUEST(request)
        } catch (e) {
            console.log(e)
        }
    }
}
async function useREQUEST(req){
    const res = await fetch(req)
    return await res.json()

}

export const apiService = new ApiService('https://posts-js-5a81c.firebaseio.com')