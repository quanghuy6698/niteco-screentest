// Init GitHub
const github = new GitHub

// Init UI
const ui = new UI

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', delay((e)=>{
    // Get input text 
    const userText = e.target.value;

    if(userText !== ''){
        // make http call 
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found'){
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger')
            }else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else {
        // Clear profile
        ui.clearProfile()
    }
},3000))

function delay(callback, ms) {
    var timer = 0;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}