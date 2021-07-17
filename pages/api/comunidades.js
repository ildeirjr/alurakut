import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = '736a20da6370df6d9c51ca5ea9b64b';
        const client = new SiteClient(TOKEN);

        // Validar os dados antes de cadastrar
        const registroCriado = await client.items.create({
            itemType: "968543",
            ...request.body
            // title: "Comunidade de teste",
            // imageUrl: "https://github.com/ildeirjr.png",
            // creatorSlug: "ildeirjr"
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não tem nada no GET, mas no POST tem'
    })
}