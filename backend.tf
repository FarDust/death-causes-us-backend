terraform {
  backend "gcs" {
    bucket  = "tf-state-fardust"
    prefix  = "terraform/state/prod"
    region  = "us-central1"
  }
}