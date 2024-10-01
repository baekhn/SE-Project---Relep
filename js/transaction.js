
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var popupButtons = document.getElementsByClassName('popup-button');
    var closeBtn = document.getElementsByClassName('close-btn')[0];

    Array.prototype.forEach.call(popupButtons, function(button) {
        button.onclick = function() {
            popup.style.display = 'flex';
        }
    });

    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }

    var buttons = document.getElementsByClassName('tab-button-tr');
});

function setActiveTab(tab) {
    var buttons = document.getElementsByClassName('tab-button-tr');
    var popupBtnTexts = document.getElementsByClassName('popupBtnText');
    var statusElements = document.getElementsByClassName('status');

    Array.prototype.forEach.call(buttons, function(button) {
        button.classList.remove('active');
    });

    if (tab === 'history') {
        buttons[0].classList.add('active');
        Array.prototype.forEach.call(popupBtnTexts, function(element) {
            element.textContent = 'Reorder';
        });
        Array.prototype.forEach.call(statusElements, function(element) {
            element.textContent = 'Done';
            element.classList.remove('ongoing', 'scheduled');
        });
    } else if (tab === 'ongoing') {
        buttons[1].classList.add('active');
        Array.prototype.forEach.call(popupBtnTexts, function(element) {
            element.textContent = 'Chat';
        });
        Array.prototype.forEach.call(statusElements, function(element) {
            element.textContent = 'Ongoing';
            element.classList.add('ongoing');
            element.classList.remove('scheduled');
        });
    } else if (tab === 'scheduled') {
        buttons[2].classList.add('active');
        Array.prototype.forEach.call(popupBtnTexts, function(element) {
            element.textContent = 'Chat';
        });
        Array.prototype.forEach.call(statusElements, function(element) {
            element.textContent = 'Scheduled';
            element.classList.add('scheduled');
            element.classList.remove('ongoing');
        });
    }
}

function setChat(tab) {
    var buttons = document.getElementsByClassName('tab-button-tr');
    if (tab === 'ongoing' || tab === 'scheduled'){
        var popupbtntext = document.getElementsByClassName('popupBtnText');
        Array.prototype.forEach.call(popupbtntext, function(element){
            element.style.display = 'none';
        })
        var link = document.getElementsByClassName('popupLink');
        Array.prototype.forEach.call(link, function(element){
            element.style.display = 'block';
        })
        var popupButtons = document.getElementsByClassName('popup-button');
        var closeBtn = document.getElementsByClassName('close-btn')[0];
    
        Array.prototype.forEach.call(popupButtons, function(button) {
            button.onclick = function() {
                popup.style.display = 'none';
            }
        });
    }
    else{
        var link = document.getElementsByClassName('popupLink');
        Array.prototype.forEach.call(link, function(element){
            element.style.display = 'none';
        })
        var popupbtntext = document.getElementsByClassName('popupBtnText');
        Array.prototype.forEach.call(popupbtntext, function(element){
            element.style.display = 'block';
        })
        var popupButtons = document.getElementsByClassName('popup-button');
        var closeBtn = document.getElementsByClassName('close-btn')[0];
    
        Array.prototype.forEach.call(popupButtons, function(button) {
            button.onclick = function() {
                popup.style.display = 'flex';
            }
        });
    }

}