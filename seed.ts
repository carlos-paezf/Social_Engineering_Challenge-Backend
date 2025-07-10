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
        imageUrl: '/assets/gato-tom.jpg',
        postDate: '2025-07-01T10:00:00Z',
        description: 'Amo este gato, se parece a mi 🐱',
        comments: [ '¡Qué lindo!', 'Tom es el mejor.' ],
        likes: 32,
        profileName: 'Juan Hacker',
        profileAvatar: '/assets/avatars/juan.jpg',
    },
    {
        imageUrl: '/assets/post-oferta.jpg',
        postDate: '2025-07-02T14:00:00Z',
        description: 'Estamos contratando, envía tu CV a juanh@securemail.com 📩',
        comments: [ 'Listo, enviado', '¿Cuánto pagan?' ],
        likes: 20,
        profileName: 'Juan Hacker',
        profileAvatar: '/assets/avatars/juan.jpg',
    },
    {
        imageUrl: '/assets/cumple-juan.jpg',
        postDate: '2025-06-28T18:00:00Z',
        description: 'Celebrando mis 32 con mi pastel favorito 🎂',
        comments: [ 'Feliz cumple!', '¡Ese pastel se ve brutal!' ],
        likes: 45,
        profileName: 'Juan Hacker',
        profileAvatar: '/assets/avatars/juan.jpg',
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
            const entity = hintRepo.create( hint );
            await hintRepo.save( entity );
        }

        console.log( "Pistas insertadas con éxito" );
        process.exit( 0 );
    } )
    .catch( ( error ) => {
        console.error( 'Error al insertar pistas', error );
        process.exit( 1 );
    } );
