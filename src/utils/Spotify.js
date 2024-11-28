
const redirectUri = 'http://localhost:3001/';
const clientId = '1ba266feb24a47ce9952b0e841b822bd';
let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken){
            return accessToken;
        }
         
        //extract access token and expires in values using Regex expressions...
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch){
            //passing 1 element as to avoid getting all array elements corresponding to that variable..
            accessToken = accessTokenMatch[1];
            const expiresIn =Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '' , expiresIn * 1000);
            window.history.pushState('accessToken', null, '/'); // this is remove expired access token
            return accessToken;
        }
        else{
             const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
             window.location = accessUrl;

        }
    },

    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`//OAuth 2.0 Bearer Token in the Authorization header.
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.tracks){
                return [];
            }
            return jsonResponse.tracks.items.map(track => (
                {
                    id:track.id,
                    name:track.name,
                    artist:track.artists[0].name,
                    album:track.album.name,
                    uri:track.uri
                }));
        });

},

async savePlaylist(name, trackUris) {
    if(!name || !trackUris.length){
        console.error('Playlist name or track URIs missing.');
        return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = {Authorization: `Bearer ${accessToken}`};
    
    try{
        //fetch user data..
        const userResponse = await fetch('https://api.spotify.com/v1/me', {headers});
        if(!userResponse.ok){
            throw new Error('Failed to fetch user information');
        }
        const userData = await userResponse.json();

        //create playlist
        const playlistResponse = await fetch('https://api.spotify.com/v1/me/playlists', {
            headers,
            method:'POST',
            body: JSON.stringify({name})
        });
        if(!playlistResponse.ok){
            throw new Error('Failed to create playlist');
        }
        const playlistData = await playlistResponse.json();

        //Add tracks to the playlists...
        const tracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistData.id}/tracks`,{
            headers,
            method:'POST',
            body:JSON.stringify({uris: trackUris})
        })

        if(!tracksResponse.ok){
            throw new Error('Failed to add tracks to the playlist');
        }

        console.log(`Playlist "${name}" successfully created and tracks added!`);

    } catch(error){
        console.error('Error in savePlaylist:', error);
    }
     
       
            
}
};




export default Spotify;