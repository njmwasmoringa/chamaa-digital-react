export default function APIClient() {

    this.baseUrl = "https://chamaa-digital-api.onrender.com";
    
    this.headers = {
        "Content-Type":"application/json"
    }

    if(sessionStorage.getItem('token')){
        this.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
    }

    this.get = (path, headers) => fetch(`${this.baseUrl}${path}`, {
        headers: { 
            ...this.headers, 
            ...headers 
        }
    }).then(r => {
        if (r.status != 200) {
            throw new Error(r.statusText);
        }

        return r.json();
    })

    this.create = (path, body, headers) => fetch(`${this.baseUrl}${path}`, { 
        method: 'POST',
         headers: { 
            ...this.headers, 
            ...headers 
        },
        body: JSON.stringify(body)
    }).then(r => {
        if (r.status != 200) {
            throw new Error(r.statusText);
        }

        return r.json();
    })

    this.patch = (path,  body, headers) => fetch(`${this.baseUrl}${path}`, { 
        method: 'PATCH',
         headers: { 
            ...this.headers, 
            ...headers 
        },
        body: JSON.stringify(body)
    }).then(r => {
        if (r.status != 200) {
            throw new Error(r.statusText);
        }

        return r.json();
    });

    this.delete = (path, headers) => fetch(`${this.baseUrl}${path}`, { 
        method: 'DELETE',
         headers: { 
            ...this.headers, 
            ...headers 
        }
    }).then(r => {
        if (r.status != 200) {
            throw new Error(r.statusText);
        }

        return r.json();
    })

    this.setHeader = (header)=>{
        this.headers = {...this.headers, ...header}
    }

}