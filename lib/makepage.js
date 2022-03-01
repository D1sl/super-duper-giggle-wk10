const makepage = data => {

    console.log(`
    
    <div class="card">
    <div class="card-body">
        <h4 class="card-title">${data.Manager.name}</h4>
        <h5 class="card-subtitle mb-2 text-muted">Manager</h5>
        <p class="card-text">ID: 121</p>
        <a href="#" class="card-link">GitHub</a>
    </div>
</div>

    `)

    }




module.exports = makepage;