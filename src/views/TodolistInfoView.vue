<template>
  <div class="container">
    <h1>Todolist Information</h1>
    <hr />
    <section>
      <h2>1. 컴포넌트 구조</h2>
      <p>TodolistView.vue</p>
      <p>└ ShowTodosView.vue</p>
      <p>└ AddTodosView.vue</p>
    </section>
    <section>
      <h2>2. 기능</h2>
      <h3>📌 TodolistView</h3>
      <ul>
        <li>ShowTodosVieww 컴포넌트를 포함하고 있습니다.</li>
        <li>AddTodosView 컴포넌트를 포함하고 있습니다.</li>
      </ul>
      <br/>
      <h3>📌 ShowTodosView</h3>
      <ul>
        <li>등록된 할 일들의 목록을 나타냅니다.</li>
        <li>각 할 일들에 대한 삭제 기능을 수행합니다.</li>
      </ul>
      <br/>
      <h3>📌 AddTodosView</h3>
      <ul>
        <li>새로운 할 일을 등록하는 컴포넌트입니다.</li>
      </ul>
    </section>
    <section>
      <h2>3. 투두리스트 동작 방법</h2>
      <h3>등록</h3>
      <ol>
        <li>하단의 input 에 새로 등록할 할 일을 작성합니다.</li>
        <li>보라색 ADD 버튼을 클릭하면 목록에 작성한 내용이 추가됩니다.</li>
        <li>새로운 연산을 수행하려면 Reset 버튼을 클릭하여 계산기를 초기화 시킵니다.</li>
      </ol>
      <br/>
      <h3>삭제</h3>
      <ol>
        <li>삭제할 항목의 왼쪽에 있는 Delete 버튼을 클릭합니다.</li>
        <li>목록에서 해당 항목이 사라집니다.</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .container {
    margin: 10px;
  }
  section {
    margin-top: 40px;
  }
  h2 {
    margin-bottom: 10px;
  }
</style>