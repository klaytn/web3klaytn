from base.testing import KlaytnBaseTesting


class TestAdminGetSpamThrottlerCandidateList(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.get_spam_throttler_candidate_list()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
