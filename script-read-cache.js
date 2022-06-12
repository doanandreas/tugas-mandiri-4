import { sleep } from 'k6'
import http from 'k6/http'

// See https://k6.io/docs/using-k6/options
export const options = {
  stages: [
    { duration: '1m', target: 50 }, // normal load
    { duration: '2m', target: 50 },
    { duration: '1m', target: 150 }, // around the breaking point
    { duration: '2m', target: 150 },
    { duration: '1m', target: 250 }, // beyond the breaking point
    { duration: '2m', target: 250 },
    { duration: '3m', target: 0 }, // scale down. Recovery stage.
  ],
  thresholds: {
    http_req_failed: ['rate<0.02'], // http errors should be less than 2%
    http_req_duration: ['p(95)<2000'], // 95% requests should be below 2s
  }
}

export default function main() {
  let response = http.get('https://nginx-tm4-jo4edqoe4q-uc.a.run.app//read/1806205123/12345')
  sleep(1)
}