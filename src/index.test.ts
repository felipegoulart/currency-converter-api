import { beforeEach, describe, expect, it } from 'vitest';
import { app } from './app.ts';

describe('GET: Health', () => {
  beforeEach(async () => {
    await app.ready();
  });

  it('should return ok', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/health',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('ok');
  });
});
