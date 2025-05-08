const axios = require('axios');

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2Njg4MjgzLCJpYXQiOjE3NDY2ODc5ODMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY2YmU3ZWVkLWMzMzgtNDEyMC1iMGI1LTM5ZmI4NDU3MTllZSIsInN1YiI6InRhbnVrdW1hcjg0Mjc4NUBnbWFpbC5jb20ifSwiZW1haWwiOiJ0YW51a3VtYXI4NDI3ODVAZ21haWwuY29tIiwibmFtZSI6InRhbnUga3VtYXIiLCJyb2xsTm8iOiIyMjA0OTIxNTMwMTM4IiwiYWNjZXNzQ29kZSI6ImJhcWhXYyIsImNsaWVudElEIjoiZjZiZTdlZWQtYzMzOC00MTIwLWIwYjUtMzlmYjg0NTcxOWVlIiwiY2xpZW50U2VjcmV0IjoiZkFwR0JWRmVqYXFiTlBLQyJ9.fO79-7eTFY8gDgj-L2uUN2VTnVMZJLwQLg7TWpdnjR4"
  },
});

async function getTopUsers() {
    try {
      const res = await api.get('/users');
      return res.data;
    } catch (err) {
      console.error('Error fetching users:', err.response?.data || err.message);
      throw err;
    }
  }

  async function getPosts(type) {
    try {
      const res = await api.get('/posts', { params: { type } });
      return res.data;
    } catch (err) {
      console.error('Error fetching posts:', err.response?.data || err.message);
      throw err;
    }
  }

module.exports = { getTopUsers, getPosts };