import { Account, Client, ID } from 'react-native-appwrite';

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

export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

