import SshSurfApi from 'ssh.surf';
import dotenv from 'dotenv';

dotenv.config();

const sshsurf = new SshSurfApi({
    apiKey: process.env.API_KEY,
    figletDecoration: true
});

let response = await sshsurf.hello();

console.log(response);