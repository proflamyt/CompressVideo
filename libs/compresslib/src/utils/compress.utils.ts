
process.on('message', (message) => {
    const file = compress(message)
    process.send(file)
    process.exit()
  });

async function compress(file) {
    const { originalname , buffer , mimetype} = file;
    // implement compression

}


