import { defineConfig } from 'vite'

export default defineConfig({
  // 기본적으로 루트('/')를 기본 경로로 설정합니다.
  // 만약 깃허브 기본 주소(id.github.io/repo/)를 사용하신다면 '/repo-name/'으로 수정이 필요합니다.
  base: '/',
})
