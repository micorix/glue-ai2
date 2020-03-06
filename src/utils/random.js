export const randomName = async () => {
    return fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(res => res.results[0].name.first)
}

export const randomAvatarUrl = (name) => `https://avatars.dicebear.com/v2/male/${name}.svg`