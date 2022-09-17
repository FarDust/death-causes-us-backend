variable "project-id" {
  type = string
  description = "The ID of the project in which the resources will be provisioned."
  sensitive = true
}

variable "project-name" {
  type = string
  description = "The name of the project in which the resources will be provisioned."
  default = "death-causes-us"
  sensitive = false
}

variable "gcp-region" {
  type = string
  description = "The region in which the resources will be provisioned."
  default = "us-central1"
  sensitive = false
}