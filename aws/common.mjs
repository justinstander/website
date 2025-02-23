/**
 * Send command to client, then log and return response
 * 
 * @param {*} client AWS SDK Client
 * @param {*} command AWS SDK Command
 * @returns a function that sends the command to client
 */
export const sendCommand = (client) => async (command) => {
  const response = await client.send(command);

  console.log(JSON.stringify(response, null, 2));

  return response;
};

/**
 * Gives us what we need from the command line
 * 
 * @returns what we need form the command line
 */
export const commandLine = () => {
  console.log(process.argv);

  const args = process.argv.slice(3);
  const command = process.argv[2];

  return { args, command };
}
