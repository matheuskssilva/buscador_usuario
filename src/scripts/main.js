document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buttonSearch').addEventListener('click', function() {

        const users = document.getElementById('users')
        const userNames = document.getElementById('userName').value
        const repository = document.getElementById('repository')
        const followers = document.getElementById('followers')
        const following = document.getElementById('following')
        const avatarImagem = document.getElementById('avatar')
        const buttonProfile = document.getElementById('profile')
        const buttonHabilitado = document.getElementById('Containeresult')

        const endPoint = `https://api.github.com/users/${userNames}`

        try {
            fetch(endPoint)
                .then(function(resposta) {
                    return resposta.json()
                })
                .then(function(json) {
                    buttonHabilitado.classList.replace('container__result--di', 'container__result')
                    users.innerText = json.login
                    repository.innerText = json.public_repos
                    followers.innerText = json.followers
                    following.innerText = json.following
                    avatarImagem.src = json.avatar_url
                    buttonProfile.href = json.html_url



                    const closeBtnModal = document.getElementById('btnClose')
                    const input = document.getElementById('input').value

                    if (userNames.trim() === '') {
                        alert('Por favor, insira um nome de usuário do GitHub.');
                        buttonHabilitado.style.display = 'none'
                        return;
                    }

                    function abirModal() {
                        closeBtnModal.style.display = 'block'
                        buttonHabilitado.style.display = 'flex';
                    }

                    function fecharModal() {
                        buttonHabilitado.style.display = 'none';
                    }
                    abirModal()
                    closeBtnModal.addEventListener('click', fecharModal);
                })
        } catch (error) {
            alert('Erro')
        }

    })
})