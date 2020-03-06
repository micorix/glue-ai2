export const askQuestion = (question) => {
    return fetch('https://glueai.azurewebsites.net/qnamaker/knowledgebases/b1a9db29-63f3-4461-b5e9-c4f2b5da6a62/generateAnswer',
        {
            method: 'post',
        headers: {
            Authorization: 'EndpointKey 85c8c87e-f1c4-4158-b4ec-8a134d6c300b',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            question
        })
    }).then(res => res.json())
}