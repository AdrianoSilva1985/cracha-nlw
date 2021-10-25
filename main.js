const linksSocialMedia = {
  github: 'AdrianoSilva1985',
  youtube: 'UC3I3aNUh0pliGvl2sbX6XrQ',
  facebook: 'adriano.dasilva.102',
  instagram: 'adrianosilva158',
  twitter: 'maykbrito'
}
function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Rodrigo da Silva'
  //O javaScript já entende se você colocar direto o id e depois alguma propriedade
  //No caso abaixo document.getElementById('userName').textContent é equivalente a
  //userName.textContent = 'Gustavo Ramos'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://www.${social}.com/${linksSocialMedia[social]}`
    alert(li.children[0].href)
    console.log(social)
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  alert(url)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.location
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfo()
