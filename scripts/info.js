import SshSurfApi from 'ssh.surf';
import dotenv from 'dotenv';

dotenv.config();

const sshsurf = new SshSurfApi({
    apiKey: process.env.API_KEY,
    figletDecoration: false
});

let response = await sshsurf.info();

console.log(response);