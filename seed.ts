import { DataSource } from "typeorm";
import { Hint } from "./src/hint/entities/hint.entity";

const AppDataSource = new DataSource( {
    type: 'better-sqlite3',
    database: 'db.sqlite',
    entities: [ Hint ],
    synchronize: true
} );


const hints: Partial<Hint>[] = [
    {
        imageUrl: 'https://w1.pngwing.com/pngs/809/551/png-transparent-man-user-user-profile-male-user-account-avatar-client-symbol-thumbnail.png',
        postDate: '2025-07-01T10:00:00Z',
        description: 'Amo este gato, se parece a mi 🐱',
        comments: [ '¡Qué lindo!', 'Tom es el mejor.' ],
        likes: 32,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvhvNLpapq5oSze1OrMKNVIFq0UXBzo1QcQ&s',
        postDate: '2025-07-02T14:00:00Z',
        description: 'Estamos contratando, envía tu CV a juanh@securemail.com 📩',
        comments: [ 'Listo, enviado', '¿Cuánto pagan?' ],
        likes: 20,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
        postDate: '2025-06-28T18:00:00Z',
        description: 'Celebrando mis 32 con mi pastel favorito 🎂',
        comments: [ 'Feliz cumple!', '¡Ese pastel se ve brutal!' ],
        likes: 45,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/gato-tom.jpg',
        postDate: '2025-07-01T10:00:00Z',
        description: 'Amo este gato, se parece a mi 🐱',
        comments: [ '¡Qué lindo!', 'Tom es el mejor.' ],
        likes: 32,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/post-oferta.jpg',
        postDate: '2025-07-02T14:00:00Z',
        description: 'Estamos contratando, envía tu CV a juanh@securemail.com 📩',
        comments: [ 'Listo, enviado', '¿Cuánto pagan?' ],
        likes: 20,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/cumple-juan.jpg',
        postDate: '2025-06-28T18:00:00Z',
        description: 'Celebrando mis 32 con mi pastel favorito 🎂',
        comments: [ 'Feliz cumple!', '¡Ese pastel se ve brutal!' ],
        likes: 45,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/gato-tom.jpg',
        postDate: '2025-07-01T10:00:00Z',
        description: 'Amo este gato, se parece a mi 🐱',
        comments: [ '¡Qué lindo!', 'Tom es el mejor.' ],
        likes: 32,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/post-oferta.jpg',
        postDate: '2025-07-02T14:00:00Z',
        description: 'Estamos contratando, envía tu CV a juanh@securemail.com 📩',
        comments: [ 'Listo, enviado', '¿Cuánto pagan?' ],
        likes: 20,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/cumple-juan.jpg',
        postDate: '2025-06-28T18:00:00Z',
        description: 'Celebrando mis 32 con mi pastel favorito 🎂',
        comments: [ 'Feliz cumple!', '¡Ese pastel se ve brutal!' ],
        likes: 45,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/gato-tom.jpg',
        postDate: '2025-07-01T10:00:00Z',
        description: 'Amo este gato, se parece a mi 🐱',
        comments: [ '¡Qué lindo!', 'Tom es el mejor.' ],
        likes: 32,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/post-oferta.jpg',
        postDate: '2025-07-02T14:00:00Z',
        description: 'Estamos contratando, envía tu CV a juanh@securemail.com 📩',
        comments: [ 'Listo, enviado', '¿Cuánto pagan?' ],
        likes: 20,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/cumple-juan.jpg',
        postDate: '2025-06-28T18:00:00Z',
        description: 'Celebrando mis 32 con mi pastel favorito 🎂',
        comments: [ 'Feliz cumple!', '¡Ese pastel se ve brutal!' ],
        likes: 45,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/gato-tom.jpg',
        postDate: '2025-07-01T10:00:00Z',
        description: 'Amo este gato, se parece a mi 🐱',
        comments: [ '¡Qué lindo!', 'Tom es el mejor.' ],
        likes: 32,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/post-oferta.jpg',
        postDate: '2025-07-02T14:00:00Z',
        description: 'Estamos contratando, envía tu CV a juanh@securemail.com 📩',
        comments: [ 'Listo, enviado', '¿Cuánto pagan?' ],
        likes: 20,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    {
        imageUrl: '/assets/cumple-juan.jpg',
        postDate: '2025-06-28T18:00:00Z',
        description: 'Celebrando mis 32 con mi pastel favorito 🎂',
        comments: [ 'Feliz cumple!', '¡Ese pastel se ve brutal!' ],
        likes: 45,
        profileName: 'Juan Hacker',
        profileAvatar: null,
    },
    // puedes agregar más pistas aquí...
];

AppDataSource
    .initialize()
    .then( async () => {
        console.log( "> Conexión establecida" );
        const hintRepo = AppDataSource.getRepository( Hint );

        await hintRepo.clear();

        for ( const hint of hints ) {
            const fixedHint = {
                ...hint,
                profileAvatar: hint.profileAvatar === undefined ? null : hint.profileAvatar
            };

            const entity = hintRepo.create( fixedHint );
            await hintRepo.save( entity );
        }

        console.log( "Pistas insertadas con éxito" );
        process.exit( 0 );
    } )
    .catch( ( error ) => {
        console.error( 'Error al insertar pistas', error );
        process.exit( 1 );
    } );
