<template>
  <div class="container">
    <h1>Calculator Information</h1>
    <hr />
    <section>
      <h2>1. 컴포넌트 구조</h2>
      <p>CalculatorView.vue</p>
      <p>└ PanelView.vue</p>
      <p>└ ControllerView.vue</p>
    </section>
    <section>
      <h2>2. 기능</h2>
      <h3>📌 CalculatorView</h3>
      <ul>
        <li>PanelView 컴포넌트를 포함하고 있습니다.</li>
        <li>ControllerView 컴포넌트를 포함하고 있습니다.</li>
      </ul>
      <br/>
      <h3>📌 PanelView</h3>
      <ul>
        <li>PanelView는 연산식과 결과를 나타내는 기능을 합니다.</li>
        <li>mapGetters를 통해 연산에 사용되는 두 개의 값과 연산자 정보를 가져옵니다.</li>
        <li>mapGetters를 통해 연산의 결과 정보도 가져옵니다.</li>
      </ul>
      <br/>
      <h3>📌 ControllerView</h3>
      <ul>
        <li>ControllerView는 연산에 사용할 value 1과 value 2값을 입력하는 input을 포함합니다.</li>
        <li>ControllerView는 더하기, 빼기, 곱하기, 나누기 버튼도 포함합니다.</li>
        <li>계산기를 초기화하는 Reset 버튼을 포함합니다.</li>
      </ul>
    </section>
    <section>
      <h2>3. 계산기 동작 방법</h2>
      <ol>
        <li>value 1과 value 2에 숫자를 입력합니다.</li>
        <li>수행할 연산자를 클릭하면 연산에 대한 식과 결과가 나타납니다.</li>
        <li>새로운 연산을 수행하려면 Reset 버튼을 클릭하여 계산기를 초기화 시킵니다.</li>
      </ol>
      <br/>
      <h3>주의 💡</h3>
      <ul>
        <li>value 1과 value 2는 반드시 숫자 타입의 값을 입력해 주세요.</li>
        <li>본 프로젝트는 value 1 &amp; value 2의 타입이 올바르지 않거나, 값을 입력하지 않았을 경우의 경고 처리를 하지 않은 상태입니다.</li>
        <li>값을 잘못 입력하거나 원하지 않은 결과가 나타났을 경우에는 계산기를 Reset 하고 규칙에 맞게 다시 실행해 주세요.</li>
      </ul>
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