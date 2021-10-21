/* aonde vai ficar o script, mas pode ser um arquivo separado;
      Pode ficar no BODY ou HEAD (depende de onde vai ser executado, no HEAD é executado antes de carregar a pagina*/
/*
      function showMeSonething(texto) {
        alert(texto)
      }
      showMeSonething(links.youtube)*/

const linksSocialMidia = {
  github: 'duloiro',
  youtube: 'UCn4ZdzjIxdUxCwXtdpk13Tg',
  facebook: 'eduardo.welzl',
  instagram: 'skygoldenbr',
  twitter: ''
}

/*
      function changeSocialMediaLinks() {
        document.getElementById('userName').textContent = 'Dani Gaino'
      }
            function changeSocialMediaLinks() {
        userName.textContent = 'Sky'  //o userName é o nome do iD no HTML
      }
      */
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //  alert(li.getAttribute('class'))
    const social = li.getAttribute('class') // esta variavel é de escopo e els só vive dentro do FOR
    //alert(social)
    li.children[0].href = `https://www.${social}.com/${linksSocialMidia[social]}`
  }
}
changeSocialMediaLinks()
/* Criar Template String usar Crase ` e ${variavel} */

/*Como pegar dados da URL, pode retornar o JSON*/
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`
  /*o .then é uma 'Promise' */
  /*ARROW FUNCITION "=>" cria uma função "anonima" , se for uma ação na função não precisa das {chaves} */
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userGitHubLogin.textContent = data.login
    })
    .then(user)
    .then()
}
getGitHubProfileInfos()
