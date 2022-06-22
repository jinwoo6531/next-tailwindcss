-로그인하지 않은 상태면 리다이렉트의 경우(useUser 생성)

1.
export default function useUser() {
const [user, setUser] = useState();
const router = useRouter();

useEffect(() => {
fetch('/api/')
.then((response) => response.json())
.then((data) => {
if(!data.ok) {
return router.push('/login');
}
setUser(data);
})
},[router]) //1번만 실행
return user;
}



2. index.tsx
const user = useUser();



- 좋아요 기능(Optimistic UI Update)
