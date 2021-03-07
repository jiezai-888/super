<template>
	<div class="nav-bar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'navbar'
	}
</script>

<style>
	.nav-bar {
		display: flex;
		height: 2.75rem;
		text-align: center;
		line-height: 0.30rem;

	}

	.left,
	.right {
		width: 3.75rem;
		/* border: 2px solid greenyellow; */
	}

	.center {
		flex: 1;
		/* border: 2px solid blue; */
	}
</style>
