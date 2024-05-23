import { Account, Client, ID, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.fj.genieReel',
    projectId: '664e4bff0015d1223c78',
    databaseId: '664e4da60027a2570d65',
    userCollectionId: '664e4ddb002cdf7d598f',
    videoCollectionId: '664e4e0600258d3a2837',
    storageId: '664e521f001352d27607'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Appwrite Endpoint
    .setProject(config.projectId) // Project ID
    .setPlatform(config.platform) // Application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    // Register User
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;
        
        const avatarURL = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarURL
            }
        );

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);    
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error)
    }
}

