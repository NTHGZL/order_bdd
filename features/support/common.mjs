import chai from 'chai';
import chaiHttp from 'chai-http';
import { When, Then } from '@cucumber/cucumber';
import { StatusCodes } from 'http-status-codes';
import api from '../../index.js';

// IMPORTANT : For Cucumber working, always use function () {}
// (never () => {})

chai.use(chaiHttp);

Then('I should have response {string}', function(expectedStatusCode) {
  chai.expect(this.response).to.have.status(StatusCodes[expectedStatusCode]);
});

When('I get the {string}', async function(type) {
  const res = await chai.request(api).get(`/${type}`);
  this.response = res;
});

Then(/following ["a-zA-Z]+ item:/, function(expectedData) {
  chai.expect(this.response.body).to.deep.equal({
    data: expectedData.hashes()[0]
  });
});

When('I list the {string}', async function (type) {
  const res = await chai.request(api).get(`/${type}`);
  this.response = res;
});

Then(/following ["a-zA-Z]+ data:/, function (dataTable) {
  chai.expect(this.response.body).to.deep.equal({
    data: dataTable.hashes()
  });
});

When('I create a {string} with following data:', async function (type, data) {
  const res = await chai.request(api).post(`/${type}s`).send(data.hashes()[0]);
  this.response = res;
}
);

Then(/following new ["a-zA-Z]+ data:/, async function (expectedData) {
  const {id, ...responseData} = this.response.body.data;
  chai.expect(responseData).to.deep.equal(expectedData.hashes()[0]);
  chai.expect(id).to.have.lengthOf(36);
});

Then(/following updated ["a-zA-Z]+ data:/, async function (expectedData) {
  chai.expect(this.response.body).to.deep.equal({
    data: expectedData.hashes()[0]
  });
});

When('I update a {string} with following data:', async function (type, data) {
  const res = await chai.request(api).put(`/${type}s/${data.hashes()[0].id}`).send(data.hashes()[0]);
  this.response = res
});

When('I delete a {string} with following data:', async function (type, data) {
  const res = await chai.request(api).delete(`/${type}s/${data.hashes()[0].id}`);     
  this.response = res;                                                          
});     

Then(/following deleted ["a-zA-Z]+ data:/, async function (expectedData) {
  chai.expect(this.response.body).to.deep.equal({
    metadata: expectedData.hashes()[0]
  });
});

