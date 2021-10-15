const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Busca um filme pelo ID', () => {
  const DBServer = new MongoMemoryServer();
  let connectionMock;


  const ID_EXAMPLE = '604cb554311d68f491ba5781';
  
  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient
     .connect(URLMock, {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
     .then((conn) => conn.db('model_example'));

    
    sinon.stub(mongoConnection, 'getConnection')
      .resolves(connectionMock);
  });

  after(() => {
    mongoConnection.getConnection.restore();
  });
  
  
  describe('Quando não existe nenhum filme com o ID informado', () => {
    it('retorna null', async () => {
      const movies = await MoviesModel.getById(ID_EXAMPLE);
      
      expect(movies).to.be.equal(null);
    });
  });
  
  describe('Quando existe um filme com o ID cadastrado', () => {
 
    
    before(async () => {
      const moviesCollection = await connectionMock.collection('movies');
      await moviesCollection.insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    
    after(async () => {
      await connectionMock.collection('movies').drop();
    });
    
    it('retorna uma objeto', async () => {
      const movie = await MoviesModel.getById(ID_EXAMPLE);
      
      expect(movie).to.be.a('object');
    });
    
    
    it('se o objeto possui os atributos "id", "title", "directedBy", "releaseYear"', async () => {
      const movie = await MoviesModel.getById(ID_EXAMPLE);
      expect(movie).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    }); 
  });
});