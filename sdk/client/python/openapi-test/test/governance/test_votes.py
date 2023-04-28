from base.testing import KlaytnBaseTesting


class TestGovernanceVotes(KlaytnBaseTesting):

    def test_post(self):
        governance_response = self.sdk.governance.votes()

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
