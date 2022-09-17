provider "google" {
  project     = var.project-id
  region      = "${var.gcp-region}"
}

provider "kubernetes" {
  host                   = "https://${google_container_cluster.primary.endpoint}"
  token                  = data.google_client_config.default.access_token
  cluster_ca_certificate = base64decode(google_container_cluster.primary.ca_certificate)
}