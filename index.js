// Select html
let btn = document.querySelector('#btn')
let profile = document.querySelector('#profile')
let input = document.querySelector('#input')
let URL = "https://api.github.com/users/"

// Github Api Access required
let client_id = '5905056fa609600c4ca8'
let client_secret = 'f7008825a5a8cbad49e110ed6651a0537f7ba0f8'


// Eventlistener
btn.addEventListener('click',()=>{
	let username =  input.value
	fetch(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}/${username}`)
	.then(res => {
		return res.json()
	})
	.then(data=> {
		console.log(username)
		if (data.name == null || undefined){
			profile.innerHTML = `<div class="alert alert-warning" role="alert">
			No result found
			</div> `
		}
		else {
			profile.innerHTML = `
			<div class="container">	
			<div class="card mb-3" style="max-width: 540px;">
			<div class="row no-gutters">
			<div class="col-md-4">
			<img src="${data.avatar_url}" class="card-img img-fluid" alt="${data.name}">
			</div>
			<div class="col-md-8">
			<div class="card-body">
			<h5 class="card-title">${data.name}</h5>
			<p class="card-text">
			<p class="lead">Bio: ${data.bio}</p>
			<p>
			<button type="button" class="btn btn-dark btn-sm">
			Followers <span class="badge badge-warning">${data.followers}</span>
			</button>

			<button type="button" class="btn btn-dark btn-sm">
			following <span class="badge badge-warning">${data.following}</span>
			</button>

			<button type="button" class="btn btn-dark btn-sm">
			Public Repos <span class="badge badge-warning">${data.public_repos}</span>
			</button>
			</p>

			</p>
			<p class="card-text"><small class="text-muted">Join in ${data.created_at}</small></p>

			<a href="${data.html_url}" class="btn btn-dark">Visit Profile</a>
			</div>
			</div>
			</div>
			</div>
			</div>
			`
			console.log(data)
		}
	})

})