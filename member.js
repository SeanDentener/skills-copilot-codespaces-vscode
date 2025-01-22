function skillsMembers()
{
    var members = document.getElementsByClassName('member');
    for (var i = 0; i < members.length; i++) {
        members[i].style.display = "none";
    }

    var skills = document.getElementById('skills').value;
    var members = document.getElementsByClassName('member');
    for (var i = 0; i < members.length; i++) {
        var memberSkills = members[i].getElementsByClassName('skills')[0].innerHTML;
        if (memberSkills.includes(skills)) {
            members[i].style.display = "block";
        }
    }
}
