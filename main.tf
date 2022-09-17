resource "google_compute_network" "vpc" {
  name                    = "gke-vpc-${var.project-name}"
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "subnet" {
  name          = "gke-cluster-subnet-${var.project-name}"
  ip_cidr_range = "10.0.0.0/21"
  network       = google_compute_network.vpc.self_link
  region        = "${var.gcp-region}"
}

resource "google_container_cluster" "primary" {
  name     = "${var.project-name}-gke"
  location = "${var.gcp-region}"
 
  network    = google_compute_network.vpc.name
  subnetwork = google_compute_subnetwork.subnet.name

  networking_mode = "VPC_NATIVE"

  ip_allocation_policy {
    services_ipv4_cidr_block = "10.0.8.0/21"
  }
 
  # Enabling Autopilot for this cluster
  enable_autopilot = true
}