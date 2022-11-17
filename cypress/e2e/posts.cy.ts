describe('GET /posts', () => {
  it('/posts', () => {
    cy.api('GET', 'http://localhost:3000/posts').as('posts');
    cy.get('@posts').then((res: any) => {
      expect(res.status).to.eq(200);
    });
  });
});
