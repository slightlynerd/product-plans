<template>
  <div class="container">
    <!-- plans -->
    <h2 class="text-center text-uppercase font-weight-bold">Product Plans</h2>
    <div class="row">
      <div class="col-12 col-lg-4 mt-4" v-for="(plan, index) in plans" :key="index">
        <div :class="`plan plan-${plan.name} card border-0 shadow-sm`">
          <div class="card-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
          </div>
          <div class="card-body">
            <p><i :class="`fa ${plan.icon} plan-icon`" aria-hidden="true"></i></p>
            <p class="plan-price">${{ plan.price }}</p>
            <ul>
              <li
                v-for="feature in plan.features"
                :key="feature.name"
                :class="{'plan-feature': true, 'strike-through': !feature.enabled}"
              >
                {{ feature.name }}
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary text-uppercase btn-lg rounded-pill px-5" @click="openSubscribe(plan)">Subscribe</button>
            <!-- modal markup -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Confirm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Are you sure you want to subscribe to this plan?</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold rounded-pill px-4" @click="subscribe"
                      :disabled="processing"
                    >
                      <span v-if="!processing">Subscribe</span>
                      <span v-else>Subscribing...</span>
                    </button>
                    <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPlans',
  data() {
    return {
      plans: [],
      selectedPlan: {},
      message: '',
      processing: false
    }
  },
  created () {
    fetch('/api/plans')
      .then(res => res.json())
      .then(json => {
        this.plans = json
      })
  },
  methods: {
    openSubscribe (plan) {
      this.selectedPlan = plan
      $('#exampleModal').modal('show')
    },
    subscribe () {
      this.processing = true
      fetch('/api/plans', { method: 'post', body: JSON.stringify(this.selectedPlan) })
      .then(res => res.json())
      .then(data => {
        $('#exampleModal').modal('hide')
        this.message = data.message
        this.processing = false
        alert(data.message)
      })
    }
  },
}
</script>

<style scoped lang="scss">
.plan-gold {
  background-color: #FFDF00;
}
.plan-bronze {
  background-color: #cd7f32;
}
.plan.silver {
  background-color: #C0C0C0;
}

.plan {
  padding: 25px 0;
  border-radius: 15px;

  .card-header, .card-footer {
    border: 0;
    background-color: transparent;
  }

  .card-header {
    border-radius: 15px 15px 0 0;
  }

  .plan-name {
    text-transform: uppercase;
  }

  .plan-icon {
    font-size: 48px;
  }

  .plan-price {
    font-size: 36px;
    font-weight: bold;
  }

  .plan-feature {
    font-size: 16px;
    font-weight: 500;

    &.strike-through {
      text-decoration: line-through;
    }
  }

  .btn {
    font-weight: bold;
  }

  .card-footer {
    border-radius: 0 0 15px 15px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
