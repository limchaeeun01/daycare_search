# 서울특별시 어린이집 커뮤니티 웹 사이트
멀티캠퍼스 부트캠프 중간 개인 프로젝트

## 개발 환경
- React
- HTML, CSS
- Java, JavaScript
- Spring
- Mybatis
- MySQL

## 활용 데이터
서울 열린데이터 광장에서 제공 중인 서울시 어린이집 정보(표준 데이터)

<https://data.seoul.go.kr/dataList/OA-20300/S/1/datasetView.do>

## 페이지 리뷰
### 초기 화면
![image](https://github.com/user-attachments/assets/be3947db-5620-42fa-b722-2cf22f66cde7)

### 사용자 관리
AuthProvider는 사용자 인증 정보를 전역에서 관리하여, 애플리케이션의 모든 컴포넌트에서 쉽게 접근하고 업데이트할 수 있도록 도와줌. 


이를 통해 로그인 상태와 사용자 정보를 효율적으로 공유할 수 있음.
![image](https://github.com/user-attachments/assets/8b1f4573-c936-4178-bb35-aa06a602967b)

### 어린이집 검색
'시/군/구', '어린이집 유형', '검색어' 등을 통해 어린이집을 필터링하여 검색할 수 있음.
![image](https://github.com/user-attachments/assets/de95fdbb-30c7-4fbc-9491-ea4cf45d5832)


### 어린이집 상세정보 보기
선택한 어린이집의 상세 정보와 후기, 별점 등을 확인할 수 있음. 로그인 상태라면 해당 어린이집을 관심 목록에 추가/삭제하고, 후기를 작성할 수 있음.
![image](https://github.com/user-attachments/assets/9de59b80-4788-4df8-8279-a7da4820bacf)
![image](https://github.com/user-attachments/assets/25fdd409-4f8e-4837-affc-794b982a911a)


### 커뮤니티
사용자들이 작성한 게시물을 '제목', '제목/내용'에 따라 필터링하여 검색할 수 있음.

로그인 상태라면 게시물을 작성, 수정, 삭제할 수 있고 다른 사용자의 게시물에 댓글을 달 수 있음.
#### 게시물 리스트 보기
![image](https://github.com/user-attachments/assets/34043dad-a5b7-435b-86b7-dea9defe1924)
#### 게시물 상세 보기
![image](https://github.com/user-attachments/assets/9245763d-a540-411b-9477-c35882e5d6eb)
#### 게시물 작성하기
![image](https://github.com/user-attachments/assets/cfb59424-e854-461e-8c6e-7d06e182b4bf)

### 마이페이지
로그인한 사용자의 회원 정보와 관심 어린이집, 작성한 게시물을 확인할 수 있음.
![image](https://github.com/user-attachments/assets/42c76b41-3b4d-45b2-9c2e-b89bd60bd144)
![image](https://github.com/user-attachments/assets/46f86d52-2c7c-44ca-9d4c-9a0093c7ea96)






