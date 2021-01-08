<template>
	<header class="bg-light">
		<div class="container">
			<nav class="navbar navbar-expand-md navbar-light bg-light py-3">
				<!-- Navbar brand -->
				<a href="#" class="navbar-brand"> <h1>Hợp âm Việt</h1> </a>

				<!-- Mobile toggle -->
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<!-- Main navigator -->
				<div class="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
					<!-- Navigator -->
					<ul class="navbar-nav mr-2 ">
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i class="bi bi-app-indicator"></i>
								Thể loại
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">Nhạc vàng</a>
								<a class="dropdown-item" href="#">Nhạc quê hương</a>
								<a class="dropdown-item" href="#">Nhạc dân ca</a>
							</div>
						</li>
						<li class="nav-item"><a class="nav-link" href="#">Điệu</a></li>
						<li class="nav-item"><a class="nav-link" href="#">User</a></li>
					</ul>

					<!-- Input form -->
					<form class="d-inline flex-grow-1">
						<div class=" input-group">
							<input
								type="search"
								class="form-control"
								placeholder="Tìm ca sĩ / nhạc sĩ"
								aria-label="Tìm ca sĩ / nhạc sĩ"
								aria-describedby="basic-addon2"
							/>
							<div class="input-group-append">
								<button class="btn btn-outline-success" id="basic-addon2" type="submit">
									Tìm
								</button>
							</div>
						</div>
					</form>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style scoped></style>
